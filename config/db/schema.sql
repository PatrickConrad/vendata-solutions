users (
  id UUID PRIMARY KEY,
  email_encrypted TEXT NOT NULL,
  email_hash TEXT UNIQUE NOT NULL,
  pin_encrypted TEXT,
  pin_expires_at TIMESTAMP,
  is_confirmed TIMESTAMP,
  is_client BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT now()
)
