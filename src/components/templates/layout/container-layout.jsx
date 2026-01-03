import { cn } from "@/shared/utils/tailwind-utils";

export default function ContainerLayout({ children, className }) {
    return <div className={cn("container mx-auto px-4", className)}>{children}</div>;
}
