const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const author = {
  name: "Fabian",
  lastname: "Baron",
};

const originalEndpoints = {
  search: "https://api.mercadolibre.com/sites/MLA/search?limit=4&q=",
  items: "https://api.mercadolibre.com/items/",
  categories: "https://api.mercadolibre.com/categories/",
};

app.get("/api/items", async (req, res) => {
  const query = req.query.q;
  const url = originalEndpoints.search + query;

  const fetchData = async () => {
    try {
      const respuesta = await fetch(url);
      const data = await respuesta.json();
      return data;
    } catch (error) {
      console.log("error", error.message);
    }
  };

  const data = await fetchData();

  const getCategories = async (data) => {
    if (data.results[0]?.category_id) {
      const respuestaCategoria = await fetch(
        originalEndpoints.categories + data.results[0].category_id
      );
      const infoCat = await respuestaCategoria.json();

      return infoCat.path_from_root;
    } else {
      const respuestaCategoria = await fetch(
        originalEndpoints.categories + data.available_filters[0]?.values[0].id
      );
      const infoCat = await respuestaCategoria.json();
      return infoCat.path_from_root;
    }
  };

  const getItems = (data) => {
    const itemsInfo = data.results.map((result) => {
      return {
        id: result.id,
        title: result.title,
        price: {
          currency: result.currency_id,
          amount: result.price,
          decimals: "",
        },
        picture: result.thumbnail,
        condition: result.condition,
        free_shipping: result.shipping.free_shipping
      };
    });


    return itemsInfo;
  };

  const categories = await getCategories(data);
  const items = getItems(data);

  res.json({
    author: author,
    categories: categories,
    items: items,
  });
});

app.get("/api/items/:id", async (req, res) => {
  const itemId = req.params.id;

  const fetchItemData = async () => {
    const url = originalEndpoints.items + itemId;
    try {
      const respuesta = await fetch(url);
      const data = await respuesta.json();
      console.log(data)
      return data;
    } catch (error) {
      console.log("error", error.message);
    }
  };

  const fetchItemDescription = async () => {
    const url = originalEndpoints.items + itemId + "/description";
    try {
      const respuesta = await fetch(url);
      const data = await respuesta.json();
      return data;
    } catch (error) {
      console.log("error", error.message);
    }
  };

  const getCategories = async (data) => {
    const respuestaCategoria = await fetch(
      originalEndpoints.categories + itemInfo.category_id
    );
    const infoCat = await respuestaCategoria.json();

    return infoCat.path_from_root;
  };

  const itemInfo = await fetchItemData();
  const itemDescription = await fetchItemDescription();
  const itemCategories = await getCategories();

  const organizedItemInfo = {
    id: itemInfo.id,
    title: itemInfo.title,
    price: {
      currency: itemInfo.currency_id,
      amount: itemInfo.price,
    },
    picture: itemInfo.pictures[0].url,
    condition: itemInfo.condition,
    free_shipping: itemInfo.shipping.free_shipping,
    sold_quantity: itemInfo.initial_quantity,
    description: itemDescription.plain_text,
    categories: itemCategories,
  };

  res.json({
    author: author,
    item: organizedItemInfo,
  });
});

app.listen(5000, () => console.log("Listening on port 5000..."));