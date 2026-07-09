/* ============================================================
   SUPABASE BAĞLANTI AYARLARI
   Değerleri Supabase Dashboard > Project Settings > API
   sayfasından alın ve aşağıya yapıştırın.

   NOT: anon key istemci tarafında kullanılmak üzere
   tasarlanmıştır, herkese açık olması normaldir. Veri
   güvenliği RLS politikalarıyla (supabase/schema.sql)
   veritabanı seviyesinde sağlanır.

   Bu değerler doldurulana kadar site üyeliksiz modda çalışır:
   sepet ve WhatsApp siparişi aynen çalışmaya devam eder.
   ============================================================ */

const SUPABASE_URL = 'https://PROJE-ADINIZ.supabase.co';
const SUPABASE_ANON_KEY = 'ANON-KEY-BURAYA';
