
CREATE TABLE public.routes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  origin_city TEXT NOT NULL,
  destination_city TEXT NOT NULL,
  duration TEXT NOT NULL,
  price NUMERIC NOT NULL,
  bus_operator public.bus_operator NOT NULL,
  departures TEXT NOT NULL,
  popular BOOLEAN NOT NULL DEFAULT false,
  active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.routes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view routes"
ON public.routes FOR SELECT
USING (true);

CREATE POLICY "Admins can insert routes"
ON public.routes FOR INSERT
WITH CHECK (public.is_admin());

CREATE POLICY "Admins can update routes"
ON public.routes FOR UPDATE
USING (public.is_admin());

CREATE POLICY "Admins can delete routes"
ON public.routes FOR DELETE
USING (public.is_admin());

CREATE TRIGGER update_routes_updated_at
BEFORE UPDATE ON public.routes
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

INSERT INTO public.routes (origin_city, destination_city, duration, price, bus_operator, departures, popular) VALUES
('Nairobi', 'Mombasa', '8 hours', 700, 'tahmeed', 'Every 2 hours', true),
('Nairobi', 'Kisumu', '6 hours', 700, 'buscar', 'Every 3 hours', true),
('Nairobi', 'Eldoret', '5 hours', 700, 'mashpoa', '4x daily', false),
('Mombasa', 'Malindi', '2 hours', 500, 'tahmeed', 'Every hour', false),
('Nairobi', 'Nakuru', '2.5 hours', 600, 'buscar', 'Every 2 hours', true),
('Kisumu', 'Kakamega', '1.5 hours', 400, 'mashpoa', '5x daily', false),
('Nairobi', 'Kisii', '7 hours', 700, 'buscar', '3x daily', true),
('Nairobi', 'Kericho', '5 hours', 700, 'mashpoa', '4x daily', false),
('Nairobi', 'Meru', '5 hours', 700, 'tahmeed', 'Every 3 hours', true),
('Nairobi', 'Nyeri', '3 hours', 700, 'mashpoa', 'Every 2 hours', false),
('Nairobi', 'Embu', '3 hours', 650, 'tahmeed', '5x daily', false),
('Nairobi', 'Garissa', '7 hours', 700, 'buscar', '2x daily', false),
('Nairobi', 'Machakos', '1.5 hours', 350, 'mashpoa', 'Every hour', true),
('Nairobi', 'Thika', '1 hour', 250, 'tahmeed', 'Every 30 min', true),
('Eldoret', 'Kapenguria (Pokot)', '3 hours', 700, 'mashpoa', '3x daily', false),
('Eldoret', 'Kitale', '2 hours', 500, 'buscar', 'Every 2 hours', false),
('Kisumu', 'Kisii', '2.5 hours', 600, 'buscar', '4x daily', false),
('Mombasa', 'Voi', '3 hours', 700, 'tahmeed', 'Every 2 hours', false),
('Mombasa', 'Lamu', '6 hours', 700, 'tahmeed', '2x daily', false),
('Nakuru', 'Kericho', '2.5 hours', 550, 'mashpoa', '5x daily', false),
('Nairobi', 'Narok', '3 hours', 700, 'buscar', 'Every 2 hours', false);
