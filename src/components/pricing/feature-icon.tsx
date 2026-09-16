import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BarChart3,
  Bell,
  BookOpen,
  Boxes,
  CreditCard,
  FileText,
  Filter,
  GitCompare,
  Globe,
  Headphones,
  Heart,
  Home,
  Info,
  Layers,
  LayoutDashboard,
  MapPin,
  MessageCircle,
  Monitor,
  Package,
  Palette,
  Phone,
  Search,
  Settings,
  Share2,
  Shield,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Star,
  Store,
  Tag,
  Ticket,
  TrendingUp,
  Truck,
  User,
  Users,
  Warehouse,
  Wand2,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const rules: [RegExp, LucideIcon][] = [
  [/whatsapp|messaging|enquiry tracking/i, MessageCircle],
  [/call|phone/i, Phone],
  [/map|location|zone/i, MapPin],
  [/instagram|social/i, Share2],
  [/search/i, Search],
  [/filter/i, Filter],
  [/review/i, Star],
  [/deal|offer|coupon/i, Tag],
  [/compare|comparison/i, GitCompare],
  [/finder|recommend/i, Wand2],
  [/stack|bundle/i, Boxes],
  [/cart/i, ShoppingCart],
  [/wishlist/i, Heart],
  [/checkout|order(ing|s| history| status| management| notification)?/i, Package],
  [/payment|razorpay|upi|card|cod|cash on delivery/i, CreditCard],
  [/deliver|shipping|pickup/i, Truck],
  [/account|customer management/i, Users],
  [/admin|dashboard/i, LayoutDashboard],
  [/inventor/i, Warehouse],
  [/lead|enquiry insight/i, Activity],
  [/analytic|interest tracking/i, BarChart3],
  [/seo/i, TrendingUp],
  [/blog|content/i, BookOpen],
  [/page|section/i, FileText],
  [/support/i, Headphones],
  [/notification/i, Bell],
  [/ticket/i, Ticket],
  [/store information|storefront|core website|website/i, Store],
  [/responsive|performance/i, Zap],
  [/mobile/i, Smartphone],
  [/ui\/ux|premium/i, Palette],
  [/home page/i, Home],
  [/about/i, Info],
  [/contact/i, Phone],
  [/catalogue|categor|product/i, Layers],
  [/ssl|security|hosting|backup/i, Shield],
  [/globe|domain/i, Globe],
  [/user|login/i, User],
  [/setting/i, Settings],
  [/featured|best seller|new arrival|spark/i, Sparkles],
  [/monitor|layout/i, Monitor],
];

export function featureIcon(label: string): LucideIcon {
  return rules.find(([pattern]) => pattern.test(label))?.[1] ?? Sparkles;
}

export function FeatureIcon({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  const Icon = featureIcon(label);
  return (
    <Icon
      className={cn("size-3.5 shrink-0 text-accent", className)}
      strokeWidth={1.75}
    />
  );
}

export function FeatureLine({ label }: { label: string }) {
  return (
    <li className="flex items-start gap-2.5 text-[13px] leading-snug text-fg">
      <span className="mt-px grid size-6 shrink-0 place-items-center rounded-md bg-white/80 text-accent shadow-[0_1px_0_rgba(23,21,18,0.04)]">
        <FeatureIcon label={label} />
      </span>
      <span className="min-w-0 pt-0.5 break-words">{label}</span>
    </li>
  );
}
