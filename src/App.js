import React, { Component } from 'react';
import Aggrid from './components/Ag-Grid/Aggrid';
import { EuiPage, EuiPageSideBar, EuiPageBody, EuiPageHeader, EuiPageHeaderSection, EuiTitle, EuiPageContentHeader, EuiPageContentHeaderSection, EuiPageContentBody, EuiPageContent } from '@elastic/eui';

class App extends Component {
  render() {
    return (
      <div className="App">
        <EuiPage>
          <EuiPageSideBar>
            <EuiTitle>
              <h1>Task-5</h1>
            </EuiTitle>
          </EuiPageSideBar>
          <EuiPageBody component="div">
            <EuiPageHeader>
              <EuiPageHeaderSection>
                <EuiTitle size="l">
                  <h1 className="mb-5 mt-3" > Ag-Grid</h1>
                </EuiTitle>
              </EuiPageHeaderSection>
              <EuiPageHeaderSection></EuiPageHeaderSection>
            </EuiPageHeader>
            <EuiPageContent>
              <EuiPageContentHeader>
                <EuiPageContentHeaderSection>
                  <EuiTitle>
                    <h2>Table</h2>
                  </EuiTitle>
                </EuiPageContentHeaderSection>
                <EuiPageContentHeaderSection>
                </EuiPageContentHeaderSection>
              </EuiPageContentHeader>
              <EuiPageContentBody><Aggrid /></EuiPageContentBody>
            </EuiPageContent>
          </EuiPageBody>
        </EuiPage>
      </div>
    );
  }
}

export default App;
