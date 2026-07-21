'use client';
import { useEffect, useState } from 'react';
import {
  TextField,
  MenuItem,
  Button,
  Stack,
  IconButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AttachmentPicker from './AttachmentPicker';
import { createTicket, getTicketCategories } from '@/lib/tickets/tickets';
import { TicketCategoryType, TicketPriority } from '@/app/core/Types';
import CustomModal from '../CustomModal/CustomModal';

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

  const setOpenHandler = (isOpen: boolean | ((prevState: boolean) => boolean)) => {
    const nextValue = typeof isOpen === 'function' ? isOpen(open) : isOpen;
    if (!nextValue) {
      handleClose();
    }
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

    if (created) {
      resetForm();
      onCreated();
      onClose();
    }
  };

  return (
    <CustomModal open={open} setOpen={setOpenHandler}>
      <Stack spacing={2} sx={{ p: 2 }}>
        {/* هدر مودال */}
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h6" fontWeight={700} color="text.title">
            ایجاد تیکت جدید
          </Typography>
          <IconButton onClick={handleClose} size="small" disabled={submitting}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Stack>

        {/* ورودی‌های فرم */}
        <Stack spacing={2} sx={{ pt: 1 }}>
          <TextField
            label="عنوان تیکت"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            required
            placeholder="مثلاً: مشکل در ثبت سفارش"
            size="small"
          />

          <TextField
            label="توضیحات"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            required
            multiline
            minRows={3}
            maxRows={5}
            placeholder="مشکل خود را با جزئیات شرح دهید..."
            size="small"
          />

          <TextField
            select
            label="دسته‌بندی"
            value={category}
            onChange={(e) => setCategory(Number(e.target.value))}
            fullWidth
            required
            disabled={categoriesLoading}
            size="small"
            helperText={categoriesLoading ? 'در حال بارگذاری دسته‌بندی‌ها...' : undefined}
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
            size="small"
          >
            {priorityOptions.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
          </TextField>

          <Stack direction="row" alignItems="center" spacing={1} sx={{ pt: 1 }}>
            <Typography variant="body2" color="text.subtitle">
              پیوست فایل (اختیاری)
            </Typography>
            <AttachmentPicker file={attachment} onChange={setAttachment} disabled={submitting} />
          </Stack>
        </Stack>

        {/* دکمه‌های اقدام (فوتر) */}
        <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ pt: 2 }}>
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
        </Stack>
      </Stack>
    </CustomModal>
  );
}