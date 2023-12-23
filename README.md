# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

1 - npm create vite@latest ./  (y -- react )
2 - npm install
3 - src main.tsx
4 - src App.tsx
5 - src global.css
6 - npm install -D tailwindcss postcss autoprefixer
7 - npx tailwindcss init -p
8 - https://tailwindcss.com/docs/guides/vite
9 - src _auth forms RootLayout.tsx Signinform.tsx Signform.tsx
10 - src _auth AuthLayout.tsx
11 - src _root pages Home.tsx
12 - https://ui.shadcn.com/docs/installation/vite 
      tsconfig.json icerisine ("baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    })
13 - npm i -D @types/node
14 - vite.config.ts (import path from "path"
      import react from "@vitejs/plugin-react"
      import { defineConfig } from "vite"

      export default defineConfig({
        plugins: [react()],
        resolve: {
          alias: {
            "@": path.resolve(__dirname, "./src"),
          },
        },
      })
      )
15 - npx shadcn-ui@latest init   
16 - (y yes default slate src/global.css yes enter enter enter yes y)
17 - npx shadcn-ui@latest add button (components\ui button.tsx olustu)
18 - npx shadcn-ui@latest add form (form olusturulmak icin kullandi) (components/ui form.tsx label.tsx olustu)
19 - SignupForm.tsx ("use client"
      import * as z from "zod"
      const formSchema = z.object({
        username: z.string().min(2).max(50),
      })
      )
20 - SignupForm.tsx (import {
      Form,
      FormControl,
      FormDescription,
      FormField,
      FormItem,
      FormLabel,
      FormMessage,
    } from "@/components/ui/form"
    // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  })
21 - npx shadcn-ui@latest add input
22 - appwrite'da uygulama olusturuldu. lib appwrite config.ts olusturuldu.
23 - npm install appwrite
24 - lib appwrite app.ts olusturuldu.
25 - types index.ts olusturuldu.
26 - appwrite storage create bucket 'media' olusturuldu.
27 - apppwrite databases createcollection -- db olusturuldu.


