import ContainerLayout from "@/components/templates/layout/container-layout";

export default function SectionTitleBanner({ title }) {
    return (
        <section className="bg-gray-300 py-40 text-center">
            <ContainerLayout>
                <h1 className="text-6xl font-bold">{title}</h1>
            </ContainerLayout>
        </section>
    );
}
