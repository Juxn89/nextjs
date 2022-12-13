import React, { useState, ChangeEvent, useEffect, FC } from 'react'
import { GetServerSideProps } from 'next'
import axios from 'axios'
import { Button, Card, CardActionArea, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import Cookies from 'js-cookie'
import { Layout } from '@components/layouts'

type ThemeChangerProps = {
  name: string,
  theme: string,
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { theme = 'pepe', name = 'No name' } = ctx.req.cookies;
  const validThemes = ['light', 'dark', 'custom']

  return {
    props: {
      theme: validThemes.includes(theme) ? theme : 'custom',
      name
    }
  }
}

const ThemeChangerPage: FC<ThemeChangerProps> = (props) => {
  const { theme } = props;

  const [currentTheme, setCurrentTheme] = useState(theme)

  useEffect(() => {
    console.log(
      localStorage.getItem('theme'),
      Cookies.get('theme')
    );
  }, [])
  

  const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newTheme = event.target.value;

    setCurrentTheme(newTheme)
    localStorage.setItem('theme', newTheme)

    Cookies.set('theme', newTheme)
  }

  const onClick = async () => {
    const { data } = await axios.get('/api/hello')

    console.log(data);
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
          <FormControl>
            <Button variant='contained' style={{ margin: 5 }} onClick={ onClick }>
              Request
            </Button>
          </FormControl>
        </CardContent>
      </Card>
    </Layout>
  )
}
 export default ThemeChangerPage