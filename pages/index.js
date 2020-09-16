import { Page } from "@shopify/polaris";

const Index = () => (
  <Page
    title="Page title"
    primaryAction={{ content: "Click me", onAction: (e) => console.log(e) }}
  />
);

export default Index;
