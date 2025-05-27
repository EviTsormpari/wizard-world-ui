# 🧙‍♂️ Wizard Houses UI

A simple, responsive frontend built with **React**, **Next.js** and **TypeScript**, providing a user-friendly interface to display magical houses.

This app fetches data either from the public [Wizard World API](https://wizard-world-api.herokuapp.com/houses) or from a **custom backend API** that replicates the structure of the public one — giving you full control over your data source.

The public Wizard World API does not properly support filtering houses by name. Searching for a single house works correctly only with the local backend.

If you'd like, you can use my custom backend that replicates the public API but fully supports search. The code is available on GitHub in the **wizardWorld_API** repo.

---

## 🔧 Technologies Used
- **React**
- **Next.js**
- **TypeScript**
- **Axios**
- Check the `package.json` file for the full list of dependencies and their versions.


---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/wizard-houses-ui.git
cd wizard-houses-ui
```
### 2. Install dependencies
```bash
npm install
```
### 3. API selection
Inside the **services** folder, you’ll find a file (e.g. houseService.ts) that contains both API options in comments.
You can uncomment the one you want to use

### 4. Run the project
```bash
npm run dev
```
