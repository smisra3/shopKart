let initialState = {
  userProfile: {
    userName: ""
  },
  navItemLinks: [{ href: "/home", title: "home", text: "Home" }, { href: "/CommonData", title: "products", text: "All Products" }, { href: "/cart", title: "cart", text: "Go to Cart" }],
  footerLinks: {
    services: [{ href: "/webdesign", title: "web design", text: "Web Design" }, { href: "/development", title: "development", text: "Development" }, { href: "/hosting", title: "hosting", text: "Hosting" }],
    about: [{ href: "/company", title: "company", text: "Company" }, { href: "/team", title: "team", text: "Team" }, { href: "/careers", title: "careers", text: "Careers" }],
    companyName: "ShopKart brings you the latest offers at jaw dropping prices and that too get it delivered at your doorstep with zero delivery fee when you order above Rs 499..."
  },
  productCardsList: [],
  productItemList: [],
  categorySelected: '',
  productsList: []
};

const globalReducer = (state = initialState, action) => {
  let newState,
    containerName,
    containerData;
  switch (action.type) {
    case 'DATA_FETCHED': {
      containerName = action.payload.component;
      containerData = action.payload.data;
      switch (containerName) {
        case 'productListing': {
          let productItemList = [],
            listArray = [];
          listArray = Array.isArray(action.payload.data) ? action.payload.data : action.payload.data.subcategories
          for (let i = 0; i < containerData.length; i++) {
            if (containerData[i].subcategories) {
              for (let j = 0; j < containerData[i].subcategories.length; j++) {
                listArray.push(containerData[i].subcategories[j]);
              }
            }
          }
          listArray.forEach(element => {
            let productItemListObj = {};
            productItemListObj = {
              id: element.id,
              price: element.max_disc,
              heading: element.name,
              imgSource: element.icon_image_url,
              itemDescription: element.sub_text
            };
            productItemList.push(productItemListObj);
          });

          newState = {
            ...state,
            productItemList,
            productsList: state.productCardsList
          };

          break;
        }
        case 'home': {
          let productCardsList = [];
          containerData.forEach(element => {
            let newObj = {};
            if (element.type === 'category') {
              newObj = {
                productName: element.name,
                id: element.id,
                name: element.name,
                class: 'col-4 t-font-weight-bold l-margin-bottom',
                productDescription: element.description
              };
              productCardsList.push(newObj);
            }
          });
          newState = {
            ...state,
            productCardsList
          };
          break;
        }
        default: {
          newState = state;
          break;
        }
      }
      break;
    }
    case 'BROWSE_BY_CATEGORY_SELECTED': {
      newState = {
        ...state,
        categorySelected: action.payload
      };
      break;
    }
    default: {
      newState = state;
      break;
    }
  }
  return newState;
};

export default globalReducer;
