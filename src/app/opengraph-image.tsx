import { ImageResponse } from 'next/og';

export const alt = 'Safha Labs — Jasa Pembuatan Website & CRM Custom Bandung';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background:
            'linear-gradient(135deg, #09090B 0%, #18181B 60%, #0F172A 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '80px',
          fontFamily: 'sans-serif',
          color: '#FFFFFF',
          position: 'relative',
        }}
      >
        {/* Decorative glow */}
        <div
          style={{
            position: 'absolute',
            top: '-10%',
            right: '-10%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(245, 158, 11, 0.25) 0%, rgba(20, 184, 166, 0.15) 50%, transparent 70%)',
          }}
        />

        {/* Top badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            background: 'rgba(255, 255, 255, 0.08)',
            padding: '10px 24px',
            borderRadius: '9999px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
          }}
        >
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: '#F59E0B',
            }}
          />
          <span
            style={{
              fontSize: '20px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              color: '#FCD34D',
              textTransform: 'uppercase',
            }}
          >
            Software House & Tech Partner
          </span>
        </div>

        {/* Main Title & Description */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            maxWidth: '950px',
          }}
        >
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              margin: 0,
            }}
          >
            Safha Labs
          </h1>
          <p
            style={{
              fontSize: '32px',
              fontWeight: 500,
              color: '#CBD5E1',
              lineHeight: 1.3,
              margin: 0,
            }}
          >
            Jasa Pembuatan Website Custom, CRM WhatsApp & Sistem Bisnis
          </p>
        </div>

        {/* Bottom meta row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            paddingTop: '32px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <span style={{ fontSize: '24px', color: '#94A3B8' }}>
              Bandung, Jawa Barat
            </span>
            <span style={{ fontSize: '24px', color: '#64748B' }}>•</span>
            <span
              style={{ fontSize: '24px', color: '#F59E0B', fontWeight: 600 }}
            >
              safhalabs.com
            </span>
          </div>
          <span style={{ fontSize: '22px', color: '#94A3B8' }}>
            100% Hak Milik Tanpa Biaya Sewa
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
