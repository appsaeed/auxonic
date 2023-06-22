import { ReactNode } from "react";
import Footer from "../../components/Footer";

export function PageContent({ children }: { children: ReactNode }) {
  return (
    <div className="container-fluid">
      <div className="row">{children}</div>
    </div>
  );
}

export function PageWrapper({ children }: { children: ReactNode }) {
  return <div className="page-wrapper">{children}</div>;
}

export function PageTitle({ children = "Hello" }: { children: ReactNode }) {
  return (
    <div className="page-titles pb-0">
      <div className="col-12 col-md-12 align-self-center">
        <h3>{children}</h3>
      </div>
    </div>
  );
}

export default function Content({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <PageWrapper>
      <PageTitle>{title}</PageTitle>
      <PageContent>{children}</PageContent>
      <Footer />
    </PageWrapper>
  );
}

export function CardComponent({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="card">
      <div className="border-bottom title-part-padding">
        <h4 className="mb-0">{title}</h4>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}
