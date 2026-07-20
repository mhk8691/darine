'use client';
import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Button,
  Stack,
  useMediaQuery,
  useTheme,
  IconButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AttachmentPicker from './AttachmentPicker';
import { createTicket, getTicketCategories } from '@/lib/tickets/tickets';
import { TicketCategoryType, TicketPriority } from '@/app/core/Types';

const priorityOptions: { value: TicketPriority; label: string }[] = [
  { value: 'low', label: 'کم' },
  { value: 'medium', label: 'متوسط' },
  { value: 'high', label: 'زیاد' },
  { value: 'urgent', label: 'فوری' },
];

interface CreateTicketDialogProps {
  open: boolean;
  onClose: () => void;
  onCreated: () => void;
}

export default function CreateTicketDialog({ open, onClose, onCreated }: CreateTicketDialogProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [categories, setCategories] = useState<TicketCategoryType[]>([]);
  const [categoriesLoading, setCategoriesLoading] = useState(false);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<number | ''>('');
  const [priority, setPriority] = useState<TicketPriority>('medium');
  const [attachment, setAttachment] = useState<File | null>(null);

  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!open) return;
    setCategoriesLoading(true);
    getTicketCategories()
      .then((data) => setCategories(data ?? []))
      .finally(() => setCategoriesLoading(false));
  }, [open]);

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setCategory('');
    setPriority('medium');
    setAttachment(null);
  };

  const handleClose = () => {
    if (submitting) return;
    resetForm();
    onClose();
  };

  const isValid = title.trim().length > 2 && description.trim().length > 4 && category !== '';

  const handleSubmit = async () => {
    if (!isValid) return;
    setSubmitting(true);
    const created = await createTicket({
      title: title.trim(),
      description: description.trim(),
      category: category as number,
      priority,
      attachment,
    });
    setSubmitting(false);

    // در صورت خطا، تابع createTicket خودش با showSnackbar پیام را نمایش می‌دهد
    if (created) {
      resetForm();
      onCreated();
      onClose();
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullScreen={fullScreen}
      fullWidth
      maxWidth="sm"
      PaperProps={{ sx: { borderRadius: fullScreen ? 0 : '12px' } }}
    >
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h6" fontWeight={700} color="text.title">
          ایجاد تیکت جدید
        </Typography>
        <IconButton onClick={handleClose} size="small">
          <CloseIcon fontSize="small" />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers sx={{ borderColor: 'background.border' }}>
        <Stack spacing={2.5} sx={{ pt: 1 }}>
          <TextField
            label="عنوان تیکت"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            required
            placeholder="مثلاً: مشکل در ثبت سفارش"
          />

          <TextField
            label="توضیحات"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            required
            multiline
            minRows={4}
            placeholder="مشکل خود را با جزئیات شرح دهید..."
          />

          <TextField
            select
            label="دسته‌بندی"
            value={category}
            onChange={(e) => setCategory(Number(e.target.value))}
            fullWidth
            required
            disabled={categoriesLoading}
            helperText={categoriesLoading ? 'در حال بارگذاری دسته‌بندی‌ها...' : ' '}
          >
            {categories.map((cat) => (
              <MenuItem key={cat.id} value={cat.id}>
                {cat.name}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="اولویت"
            value={priority}
            onChange={(e) => setPriority(e.target.value as TicketPriority)}
            fullWidth
          >
            {priorityOptions.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
          </TextField>

          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="body2" color="text.subtitle">
              پیوست فایل (اختیاری)
            </Typography>
            <AttachmentPicker file={attachment} onChange={setAttachment} disabled={submitting} />
          </Stack>
        </Stack>
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button onClick={handleClose} color="inherit" disabled={submitting}>
          انصراف
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          disabled={!isValid || submitting}
          sx={{ borderRadius: '8px', px: 3, fontWeight: 700 }}
        >
          {submitting ? 'در حال ارسال...' : 'ثبت تیکت'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
