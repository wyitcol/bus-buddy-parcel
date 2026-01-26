-- Fix search_path on generate_tracking_id function
CREATE OR REPLACE FUNCTION public.generate_tracking_id()
RETURNS TEXT
LANGUAGE plpgsql
SECURITY INVOKER
SET search_path = public
AS $$
DECLARE
    new_id TEXT;
BEGIN
    new_id := 'BP-' || LPAD(FLOOR(RANDOM() * 1000000)::TEXT, 6, '0');
    RETURN new_id;
END;
$$;

-- Fix search_path on set_tracking_id trigger function
CREATE OR REPLACE FUNCTION public.set_tracking_id()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY INVOKER
SET search_path = public
AS $$
BEGIN
    IF NEW.tracking_id IS NULL OR NEW.tracking_id = '' THEN
        NEW.tracking_id := public.generate_tracking_id();
    END IF;
    RETURN NEW;
END;
$$;