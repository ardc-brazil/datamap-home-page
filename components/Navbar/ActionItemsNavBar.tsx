import Link from "next/link";

export function ActionItemsNavBar() {
  return (
    <>
      <Link
        href={{
          pathname: `${process.env.NEXT_PUBLIC_DATAMAP_BASE_URL}/account/login`,
          query: { phase: "sign-in", tenancy: "datamap/production/data-amazon" },
        }}
        className="btn-primary"
      >
        Sign in
      </Link>
    </>
  );
}
