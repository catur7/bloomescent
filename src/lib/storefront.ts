import { PUBLIC_WHATSAPP_NUMBER } from '$app/env/public';
import products from '../../catalog/products.json';

export { products };
export type Product = (typeof products)[number];

export const navigation = [
  { id: 'home', label: 'Home' },
  { id: 'company-profile', label: 'Company Profile' },
  { id: 'informasi-produk', label: 'Informasi Produk' },
  { id: 'produk', label: 'Produk' },
  { id: 'kontak', label: 'Kontak' }
];

const currency = new Intl.NumberFormat('id-ID', { maximumFractionDigits: 0 });
const recipient = PUBLIC_WHATSAPP_NUMBER;

const hasWhatsAppNumber = /^[1-9]\d{7,14}$/.test(recipient);

export function formatRupiah(amount: number) {
  return `Rp${currency.format(amount)}`;
}

export function whatsappLink(product?: Product) {
  const message = product
    ? `Halo Bloomé Scent! Saya ingin pesan ${product.name} (${formatRupiah(product.priceIdr)} per buah). Apakah masih tersedia?`
    : 'Halo Bloomé Scent! Saya tertarik dengan scented wax Bloomé. Boleh tanya pilihan aromanya?';

  return `https://wa.me/${hasWhatsAppNumber ? recipient : ''}?text=${encodeURIComponent(message)}`;
}
