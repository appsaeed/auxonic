import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { findMenuNameByPath } from "../../app/functions";
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

export function PageTitle({ children }: { children?: ReactNode }) {
  const title = findMenuNameByPath(useLocation().pathname);
  if (children) {
    toast.success("Page Title has in content");
  }
  return (
    <div className="page-titles pb-0">
      <div className="col-12 col-md-12 align-self-center">
        <h3>{!children && title}</h3>
      </div>
    </div>
  );
}

export default function Content({
  title,
  children,
}: {
  title?: string;
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
      <PageTitle>{title}</PageTitle>
      <div className="card-body">{children}</div>
      <Footer />
    </div>
  );
}
