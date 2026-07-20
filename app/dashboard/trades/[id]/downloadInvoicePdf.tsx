import { pdf } from '@react-pdf/renderer';
import { SalesInvoiceData } from './SalesInvoiceCard';
import { InvoicePdfDocument } from './InvoicePdfDocument';

export interface DownloadInvoicePdfOptions {
  fileName?: string;
}

export async function downloadInvoicePdf(
  invoiceData: SalesInvoiceData,
  { fileName }: DownloadInvoicePdfOptions = {fileName:'فاکتور دارینه'}
): Promise<void> {
  const blob = await pdf(<InvoicePdfDocument data={invoiceData} />).toBlob();
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = fileName ?? `invoice-${invoiceData.invoiceDate.replace(/\s|\//g, '-')}.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}