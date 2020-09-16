import { Page } from "@shopify/polaris";
import { ResourcePicker } from "@shopify/app-bridge-react";

class Index extends React.Component {
  state = { open: false };
  render = () => (
    <Page
      title="Page title"
      primaryAction={{
        content: "Click me",
        onAction: (e) => this.setState({ open: true }),
      }}
    >
      <ResourcePicker resourceType="Product" open={this.state.open} />
    </Page>
  );
}

export default Index;
