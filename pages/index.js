import { Page } from "@shopify/polaris";
import { ResourcePicker } from "@shopify/app-bridge-react";

class Index extends React.Component {
  state = { open: false };

  handleSelection = (resources) => {
    const ids = resources.selection.map((e) => e.id);
    this.setState({ open: false });
    console.log(ids);
  };
  render = () => (
    <Page
      title="Page title"
      primaryAction={{
        content: "Click me",
        onAction: () => this.setState({ open: true }),
      }}
    >
      <ResourcePicker
        resourceType="Product"
        open={this.state.open}
        onCancel={() => this.setState({ open: false })}
        onSelection={(resources) => this.handleSelection(resources)}
      />
    </Page>
  );
}

export default Index;
