# RaviHelon-msf.github.io

## Description

This repository serves as the source code for RaviHelon's personal website, functioning as a comprehensive portfolio to showcase personal projects, skills, and capabilities. The site aims to provide visitors with insights into RaviHelon's work and interests, acting as a platform for potential collaborations and project partnerships.

### Understanding Project Structure

The website utilizes the following technologies:

1. [Deno](https://deno.land/) as the runtime environment.
2. [Preact](https://preactjs.com/) as the rendering engine.
3. [Fresh](https://fresh.deno.dev/) as the meta framework.

To maintain a clean and organized codebase, the project structure is divided as follows:

- **/components**: Contains HTML generator code, housing UI elements such as product shelves, footer, header, product galleries, etc.
  
- **/sdk**: Holds logic-related code, responsible for computing prices, handling cart functionality, and other business logic.

Other folders are framework-specific and serve the following purposes:

- **/islands**: Fresh-based folder for adding JavaScript to the frontend. More info can be found in [Fresh's docs](https://fresh.deno.dev/docs/concepts/islands).

- **/routes**: Fresh-based folder for responding to custom routes within the store. Additional information is available in [Fresh's docs](https://fresh.deno.dev/docs/concepts/routes).

- **/static**: Fresh-based folder for serving static content, including assets. Check out [Fresh's docs](https://fresh.deno.dev/docs/concepts/static-files).

- **import_map.json**: File containing dependencies. Refer to [Deno's docs](https://deno.land/manual@v1.31.0/basics/import_maps) for more information.

- **tailwind.config.ts**: Tailwind CSS configuration file. Explore [Tailwind CSS docs](https://tailwindcss.com/) for details.

## Getting Started

To explore or contribute to this project:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/RaviHelon-msf/RaviHelon-msf.github.io.git
   ```

2. Navigate to the project directory:
   ```bash
   cd RaviHelon-msf.github.io
   ```

3. Review the project structure to understand the organization of code and resources.

4. For development, ensure you have Deno installed, and follow the setup instructions in the project's documentation.

5. Make any necessary changes, improvements, or additions.

6. Open a pull request to contribute your changes.

## License

This project is open-source and follows the licensing terms outlined in the [LICENSE](LICENSE) file.
```

This README template provides a structured guide for users interested in the RaviHelon-msf.github.io project, including details about its purpose, technologies used, project structure, and how to get started or contribute.
