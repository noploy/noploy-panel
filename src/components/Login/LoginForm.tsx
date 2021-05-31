import { useContext } from 'react'
import {
  Button,
  FormControl,
  FormLabel,
  Stack,
  InputGroup,
  Flex,
  Box,
  useToast,
  useColorModeValue
} from '@chakra-ui/react'
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from './../Utils/Input';
import { AuthContext } from '../../contexts/AuthContext';


const loginSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
});

export const LoginForm = () => {
  const toast = useToast()
  const { signIn } = useContext(AuthContext)

  const { register, formState, handleSubmit } = useForm({
    resolver: yupResolver(loginSchema)
  });
  const { errors } = formState;


  const handleLogin = async (data) => {
    const { response }: any = await signIn(data);
    if (response.data.statusCode === 401) {
      toast({
        title: "Não foi possível efetuar o login",
        description: "E-mail ou senha incorretos",
        status: "error",
        isClosable: true,
        position: "top-right"
      });
    }

  }

  return (
    <Box
      as="form"
      onSubmit={handleSubmit(handleLogin)}
    >
      <Stack spacing="6">

        <FormControl >
          <FormLabel>E-mail address</FormLabel>
          <Input name="email" id="email" autoComplete="email" {...register('email')} error={errors.email} />
        </FormControl>

        <FormControl >
          <Flex justify="space-between">
            <FormLabel>Password</FormLabel>
            <Box as="a" color={useColorModeValue('blue.600', 'blue.200')} fontWeight="semibold" fontSize="sm">
              Forgot your password?
            </Box>
          </Flex>
          <InputGroup>
            <Input
              id="password"
              name="password"
              type="password"
              {...register('password')}
              error={errors.password}
            />
          </InputGroup>
        </FormControl>

        <Button isLoading={formState.isSubmitting} type="submit" colorScheme="blue" size="lg" fontSize="md">
          Login
      </Button>
      </Stack>
    </Box>
  )
}
