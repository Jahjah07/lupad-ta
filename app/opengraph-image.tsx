import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt = 'LUPAD-Ta Travel & Tours. Dumaguete tour packages and Philippine island trips.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), 'public/logo.png'));
  return new ImageResponse(<div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px', background: '#eef6fb', color: '#084b87' }}>
    <img src={`data:image/png;base64,${logo.toString('base64')}`} width={480} height={199} alt="" />
    <div style={{ fontSize: 48, fontWeight: 700, marginTop: 40, display: 'flex' }}>Your next island adventure starts here.</div>
    <div style={{ fontSize: 28, marginTop: 24, display: 'flex', color: '#425a70' }}>Dumaguete, Siquijor, Apo Island & Cebu</div>
    <div style={{ height: 8, width: 160, background: '#d5a53c', marginTop: 36 }} />
  </div>, size);
}
