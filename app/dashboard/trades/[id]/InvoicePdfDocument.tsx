import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';
import type { ViewProps } from '@react-pdf/renderer';
import type { SalesInvoiceData } from './SalesInvoiceCard';

Font.register({
  family: 'Vazirmatn',
  fonts: [
    { src: '/fonts/Vazirmatn-Regular.ttf', fontWeight: 400 },
    { src: '/fonts/Vazirmatn-Bold.ttf', fontWeight: 700 },
  ],
});

Font.registerHyphenationCallback((word) => [word]);

const RLM = '\u200F';

function rtl(text: string): string {
  return `${RLM}${text}${RLM}`;
}

const COLORS = {
  title: '#1A1A1A',
  subtitle: '#6B6B6B',
  border: '#E3E3E3',
  paper: '#F7F7F7',
  background: '#FFFFFF',
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: COLORS.background,
    padding: 28,
    fontFamily: 'Vazirmatn',
    direction: 'rtl',
  },
  card: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 14,
    padding: 20,
  },
  header: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: 700,
    color: COLORS.title,
    textAlign: 'right',
  },
  dateText: {
    fontSize: 10,
    color: COLORS.subtitle,
    textAlign: 'right',
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 700,
    color: COLORS.title,
    marginBottom: 10,
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  infoItem: {
    flexDirection: 'row-reverse',
    width: '33%',
    marginBottom: 4,
  },
  infoItemQuarter: {
    flexDirection: 'row-reverse',
    width: '25%',
    marginBottom: 4,
  },
  label: {
    fontSize: 9,
    color: COLORS.subtitle,
    textAlign: 'right',
  },
  value: {
    fontSize: 9,
    fontWeight: 700,
    color: COLORS.title,
    marginRight: 4,
    textAlign: 'right',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    marginBottom: 16,
  },
  totalBox: {
    flexDirection: 'row-reverse',
    alignSelf: 'flex-end',
    backgroundColor: COLORS.paper,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  totalLabel: {
    fontSize: 10,
    color: COLORS.subtitle,
    textAlign: 'right',
  },
  totalValue: {
    fontSize: 11,
    fontWeight: 700,
    color: COLORS.title,
    marginRight: 4,
    textAlign: 'right',
  },
});

interface InfoItemProps {
  label: string;
  value: string;
  style?: ViewProps['style'];
}

function InfoItem({ label, value, style }: InfoItemProps) {
  return (
    <View style={style ?? styles.infoItem}>
      <Text style={styles.label}>{rtl(`${label} :`)}</Text>
      <Text style={styles.value}>{rtl(value)}</Text>
    </View>
  );
}

export interface InvoicePdfDocumentProps {
  data: SalesInvoiceData;
}

export function InvoicePdfDocument({ data }: InvoicePdfDocumentProps) {
  const { type, buyer, seller, gold, totalAmount, invoiceDate } = data;

  const isBuy = type === 'buy';

  const invoiceTitle = isBuy ? 'فاکتور خرید' : 'فاکتور فروش';
  const totalLabel = isBuy ? 'مبلغ قابل پرداخت' : 'مبلغ قابل دریافت';

  const buyerSection = (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>مشخصات خریدار</Text>
      <View style={styles.row}>
        <InfoItem label="نام شخص حقیقی/حقوقی" value={buyer.name} />
        <InfoItem label="استان" value={buyer.province} />
        <InfoItem label="آدرس" value={buyer.address} />
      </View>
    </View>
  );

  const sellerSection = (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>مشخصات فروشنده</Text>
      <View style={styles.row}>
        <InfoItem label="نام شخص حقیقی/حقوقی" value={seller.name} />
        <InfoItem label="شماره ملی" value={seller.nationalId} />
        <InfoItem label="شماره تماس" value={seller.phone} />
      </View>
    </View>
  );

  const [firstSection, secondSection] = isBuy
    ? [buyerSection, sellerSection]
    : [sellerSection, buyerSection];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.title}>{invoiceTitle}</Text>
            <Text style={styles.dateText}>{rtl(`تاریخ : ${invoiceDate}`)}</Text>
          </View>

          {firstSection}
          <View style={styles.divider} />

          {secondSection}
          <View style={styles.divider} />

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>مشخصات طلای مورد معامله</Text>
            <View style={styles.row}>
              <InfoItem
                style={styles.infoItemQuarter}
                label="وزن طلا"
                value={`${gold.weightGrams} گرم`}
              />
              <InfoItem
                style={styles.infoItemQuarter}
                label="عیار طلا"
                value={gold.purity}
              />
              <InfoItem
                style={styles.infoItemQuarter}
                label="قیمت هر گرم طلا"
                value={gold.pricePerGram}
              />
              <InfoItem
                style={styles.infoItemQuarter}
                label="کارمزد"
                value={gold.fee}
              />
            </View>
          </View>

          <View style={styles.totalBox}>
            <Text style={styles.totalLabel}>{rtl(`${totalLabel} :`)}</Text>
            <Text style={styles.totalValue}>{rtl(totalAmount)}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}