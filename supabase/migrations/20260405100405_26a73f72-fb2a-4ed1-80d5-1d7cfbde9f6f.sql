CREATE POLICY "Users can update own parcels"
ON public.parcels
FOR UPDATE
TO public
USING (auth.uid() = sender_user_id)
WITH CHECK (auth.uid() = sender_user_id);