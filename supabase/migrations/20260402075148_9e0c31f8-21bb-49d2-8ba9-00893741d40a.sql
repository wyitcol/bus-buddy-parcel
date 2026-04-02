
ALTER TABLE public.parcels 
ADD COLUMN payment_status text NOT NULL DEFAULT 'unpaid',
ADD COLUMN payment_amount numeric DEFAULT 0,
ADD COLUMN mpesa_receipt text,
ADD COLUMN mpesa_phone text;
