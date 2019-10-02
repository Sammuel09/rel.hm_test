import React from 'react';
import NavBar from '../components/common/NavBar';
import ProviderGrid from '../components/ProviderGrid';
import NewProvider from '../components/NewProvider';
import ApiService from '../utils/apiService';
import LoadingScreen from '../components/common/LoadingScreen';
import {jsonGet} from '../utils/utils';


class ExplorePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      initialData: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.setLoading(true);
    ApiService.get(ApiService.ENDPOINTS.providers)
      .then((res) => {
        const newData = res.data
        this.setState({
          isLoading: false,
          data: newData,
          initialData: newData
        });
      });
  }

  setLoading = (isLoading) => {
    this.setState({
      isLoading
    });
  }

  filterProviders = (event) => {
    // TASK 2:
    // On input, filter Available Providers based on Name, Address and Type
    // P.s the JSON search function you created in utils
    // can come in handy here ;)
    // i.e jsonGet(json, 'location.address') to get the address
    //
    // ============== CODE GOES BELOW THIS LINE :) ==============
    console.log(event.target.value)
    const filteredData = jsonGet(this.state.data, event.target.value)
    if (event.target.value){
      this.setState({
        data: filteredData
      });
    } else {
      this.setState({
        data: this.state.initialData
      });
    }
  }

  render() {
    const { isLoading, data } = this.state;
    return (
      <div className="container">
        <NavBar />
        <div className="content__main">
          <section className="main__top-providers">
            <h2 className="text-header">Our Providers</h2>
            <div className="flex-row">
              <div>
                <input
                  type="text"
                  className="input__style_1 input__search"
                  placeholder="&#xf002; Search with Provider Name, Address, or Type"
                  // onChange={this.filterProviders}
                  // onInput={this.filterProviders}
                  onKeyUp={this.filterProviders}
                />
              </div>
            </div>
            {isLoading ? (
              <LoadingScreen />
            ) : (
              <ProviderGrid
                providers={data}
              />
            )}
          </section>
          <section className="main__new-provider fixed">
            <NewProvider />
          </section>
        </div>
      </div>
    );
  }
}

export default ExplorePage;
