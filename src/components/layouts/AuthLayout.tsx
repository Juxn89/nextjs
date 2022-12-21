import { FC } from "react"
import Head from "next/head"
import { Box } from "@mui/system";

interface IAuthLayoutProps {
  children?: JSX.Element | JSX.Element[]
  title: string;
}

export const AuthLayout: FC<IAuthLayoutProps>= ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{ title }</title>
      </Head>
      
      <main>
        <Box display='flex' justifyContent='center' alignItems='center' height='calc(100vh - 200px)'>
          { children }
        </Box>
      </main>
    </>
  )
}
