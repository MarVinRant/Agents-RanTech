import PlatformPage from "../platform-page";
import OrganizationDetail from "../organization-detail";

export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  if (slug?.[0] === "organizations" && slug[1]) return <OrganizationDetail id={slug[1]} />;
  return <PlatformPage />;
}
