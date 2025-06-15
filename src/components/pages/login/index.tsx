import { addToast, Card, CardBody, CardHeader, cn } from '@heroui/react'
import { Form } from '@heroui/form'
import { Button } from '@heroui/button'
import { Input } from '@heroui/input'
import React from 'react'

import { PasswordInput } from '@/components/molecules'

export function LoginPage() {
  const [_, setAction] = React.useState<null | string>(null)

  const [isLoading, startTransition] = React.useTransition()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    startTransition(() => {
      // const response = await loginAction(formData)

      if (!'response.success') {
        addToast({
          color: 'danger',
          description: 'response.message',
          shouldShowTimeoutProgress: true,
          variant: 'bordered',
        })
      }
    })
  }

  return (
    <main className="flex items-center justify-center w-full h-dvh bg-muted">
      <Card className="max-w-md w-full shadow-xl">
        <CardHeader as="header" className="flex-col gap-2">
          <h1 className="text-2xl font-bold text-center">Login</h1>
          <p className="text-sm text-muted-foreground text-center">
            Acesse sua conta institucional
          </p>
        </CardHeader>

        <CardBody>
          <Form
            className={cn('w-full  mx-auto h-ful  space-y-10')}
            onReset={() => setAction('reset')}
            onSubmit={handleSubmit}
          >
            <Input
              isRequired
              color="primary"
              errorMessage="Please enter a valid email"
              label="email"
              labelPlacement="outside"
              name="email"
              placeholder="Enter your email"
              type="text"
              variant="faded"
            />
            <PasswordInput
              isRequired
              color="primary"
              errorMessage="Please enter a valid password"
              label="Password"
              labelPlacement="outside"
              name="password"
              placeholder="Enter your password"
              variant="faded"
            />
            <div className="flex gap-2 mt-4 w-full  flex-col">
              <Button
                fullWidth
                color="primary"
                isLoading={isLoading}
                type="submit"
                variant="shadow"
              >
                Submit
              </Button>
              <Button fullWidth isDisabled={isLoading} type="reset">
                Reset
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </main>
  )
}
