import React, { Component } from 'react';
import components from '../components/mdx-components';
import Page from '../components/Page';

export default class Docs extends Component {
  static async getInitialProps({ query }) {
    const { category, slug = 'index' } = query;
    const page = await import(`../content/${category}/${slug}.md`);
    return { page };
  }

  render() {
    const { default: Markdown } = this.props.page;
    return (
      <Page>
        <Markdown components={components} />
      </Page>
    );
  }
}
