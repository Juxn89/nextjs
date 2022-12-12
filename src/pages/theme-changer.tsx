import React, { useState, ChangeEvent, useEffect, FC } from 'react'
import { GetServerSideProps } from 'next'
import { Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import Cookies from 'js-cookie'
import { Layout } from '@components/layouts'

type ThemeChangerProps = {
  name: string,
  theme: string,
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { theme = 'pepe', name = 'No name' } = ctx.req.cookies;

  return {
    props: {
      theme,
      name
    }
  }
}

const ThemeChangerPage: FC<ThemeChangerProps> = (props) => {
  const { theme } = props;

  const [currentTheme, setCurrentTheme] = useState(theme)

  useEffect(() => {
    console.log(
      localStorage.getItem('theme')
    );
  }, [])
  

  const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newTheme = event.target.value;

    setCurrentTheme(newTheme)
    localStorage.setItem('theme', newTheme)

    Cookies.set('theme', newTheme)
  }

  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Theme</FormLabel>
            <RadioGroup row value={ currentTheme } onChange={ onThemeChange }>
              <FormControlLabel value={'light'} control={<Radio />} label={'Light'} />
              <FormControlLabel value={'dark'} control={<Radio />} label={'Dark'} />
              <FormControlLabel value={'custom'} control={<Radio />} label={'Custom'} />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    </Layout>
  )
}
 export default ThemeChangerPage