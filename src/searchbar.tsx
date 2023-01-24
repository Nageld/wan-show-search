import { Field, Form, Formik } from 'formik';
import React from 'react';
import {
  FormControl,
  FormErrorMessage,
  Input,
  Button,
} from "@chakra-ui/react"
import { dummy } from './Videos';
import {Videos, formatData} from "./Videos"


export const Searchbar = function FormikExample({ updater, data }: { updater: (newValue: React.SetStateAction<any[]>) => void, data: any[] }) {
  function validateName(value: string) {
    let error
    if (!value) {
      error = 'Cannot be blank'
    }
    return error
  }

  return (
    <Formik
      initialValues={{ name: 'Gpu Prices' }}
      onSubmit={(values, actions) => {
        setTimeout(async () => {
          try {
          const res = await fetch("https://141.148.63.115:5000/search?query=" + values.name);
          data.length = 0
          dummy.length = 0
          updater(data)
          var body = await res.json()
          for (let i in body) {
            dummy.push(body[i])
          }
          updater(dummy)
          formatData()
        } catch {
          
        }
          actions.setSubmitting(false)

        }, 1000)
      }}
    >
      {(props) => (
        <><Form>
          <Field name='name' validate={validateName}>
            {({ field, form }: { field: any; form: any; }): JSX.Element => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <Input {...field} placeholder='Gpu Prices' />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            colorScheme='teal'
            isLoading={props.isSubmitting}
            type='submit'
          >
            Submit
          </Button>
        </Form><Videos test={data}></Videos></>

      )}
    </Formik>

  )
}