import { EmptyState, Layout, Page } from "@shopify/polaris";
import { ResourcePicker } from "@shopify/app-bridge-react";
import store from "store-js";
import ResourceListWithProducts from "../components/ResourceList";

const img = "https://picsum.photos/200/300";

class Index extends React.Component {
  state = { open: false };
  render() {
    const emptyState = !store.get("ids");
    return (
      <Page>
        <ResourcePicker
          resourceType="Product"
          showVariants={false}
          open={this.state.open}
          onSelection={(resources) => this.handleSelection(resources)}
          onCancel={() => this.setState({ open: false })}
        />
        <EmptyState
          heading="Welcome"
          action={{
            content: "Select products",
            onAction: () => this.setState({ open: true }),
          }}
          // image={img}
        ></EmptyState>
        <ResourceListWithProducts />
      </Page>
    );
  }

  handleSelection = (resources) => {
    const idsFromResources = resources.selection.map((product) => product.id);
    this.setState({ open: false });
    store.set("ids", idsFromResources);
  };
}

export default Index;
