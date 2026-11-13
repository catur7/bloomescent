import { PUBLIC_WHATSAPP_NUMBER } from '$app/env/public';
import products from '../../catalog/products.json';

export { products };
export type Product = (typeof products)[number];

export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/our-story', label: 'Our Story' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact' }
];

export const socialLinks = [
  { label: 'Instagram', handle: '@bloome_scent', href: 'https://www.instagram.com/bloome_scent/' },
  { label: 'TikTok', handle: '@house.of.bloomee', href: 'https://www.tiktok.com/@house.of.bloomee' }
];

const currency = new Intl.NumberFormat('id-ID', { maximumFractionDigits: 0 });
const recipient = PUBLIC_WHATSAPP_NUMBER;

const hasWhatsAppNumber = /^[1-9]\d{7,14}$/.test(recipient);

export function formatRupiah(amount: number) {
  return `Rp${currency.format(amount)}`;
}

export function whatsappLink(product?: Product) {
  const message = product
    ? `Hi Bloomé Scent! I'd like to order ${product.name} (${formatRupiah(product.priceIdr)} each). Is it available?`
    : "Hi Bloomé Scent! I'm interested in your wax sachets. Could you tell me which scents are available?";

  return `https://wa.me/${hasWhatsAppNumber ? recipient : ''}?text=${encodeURIComponent(message)}`;
}
