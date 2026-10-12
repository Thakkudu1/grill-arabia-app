# Grill Arabia — English Food Ordering App

A mobile-friendly food ordering website that can be hosted free using GitHub Pages. Customers can browse the menu, add food to a cart, enter their name and delivery address, then send the order to the restaurant through WhatsApp.

## Important
- This is a website, not a native Android APK.
- Orders are sent to WhatsApp. There is no online payment, customer account, live delivery tracking, or private admin database.
- Menu items and prices are examples. Replace them with your actual restaurant details before publishing.

## Configure your restaurant
1. Open `app.js`.
2. The WhatsApp number is already configured as `917736094215`. Verify that this is the correct restaurant WhatsApp number before publishing.
3. Edit the `MENU` array to add your actual food names, categories, rupee prices, descriptions and emojis.
4. If your restaurant name is not Grill Arabia, replace the visible name in `index.html` and the order message in `app.js`.

## Publish free with GitHub Pages
1. Sign in to GitHub and open your repository.
2. Extract the ZIP and upload `index.html`, `style.css`, `app.js`, and `README.md`. Upload the files themselves, not the ZIP as one file.
3. Commit the changes.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Choose branch `main` and folder `/ (root)`, then press **Save**.
7. Wait a few minutes. Your website address will appear in the Pages section.

## Add a menu item
Add an object like this to the `MENU` list in `app.js`:
```js
{id:10,name:"Your Dish",category:"Mandi",price:250,emoji:"🍛",desc:"Short description of the dish.",badge:"POPULAR"}
```
Use a unique numeric `id` for each item.
