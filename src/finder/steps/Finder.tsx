import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from "../../components/Button/Button";
import { InputText } from "../../components/Input/InputText";
import InputTextField from "../../components/Input/InputTextField";
import { useCompany } from '../../hooks/useCompany';

interface FinderProps {
  nextStep: () => void;
  prevStep: () => void;
}

interface FormValues {
  name: string;
}

// melhorar tipagem dos sócios

export default function Finder({ nextStep, prevStep }: FinderProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const { setCompany } = useCompany();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    alert(data.name);
    try {
      const response = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${data.name}`);

      if (!response.ok) {
        throw new Error(`Erro na resposta da API: ${response.statusText}`);
      }

      const cnpjData = await response.json();

      const obj = {
        companyName: cnpjData.nome_fantasia,
        legalName: cnpjData.razao_social,
        openingDate: cnpjData.data_inicio_atividade,
        status: cnpjData.descricao_situacao_cadastral,
        mainActivity: cnpjData.cnae_fiscal_descricao,
        address: {
          street: cnpjData.logradouro,
          number: cnpjData.numero,
          complement: cnpjData.complemento,
          neighborhood: cnpjData.bairro,
          city: cnpjData.municipio,
          state: cnpjData.uf,
          postalCode: cnpjData.cep,
        },
        phone: cnpjData.ddd_telefone_1,
        email: cnpjData.email,
        partners: cnpjData.qsa.map(socio => ({
          name: socio.nome_socio,
          qualification: socio.qualificacao_socio,
          entryDate: socio.data_entrada_sociedade
        }))
      };
      
      setCompany((prevState) => ({ ...prevState, ...obj }))

      nextStep();
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  return (
    <div>
      <h1>Finder</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputTextField>
          <InputText.Label label="Nome:" htmlFor="name" />
          <InputText.Root
            placeholder="Digite o CNPJ"
            register={{...register('name', { required: 'Nome é obrigatório' })}}
          />
          {errors.name && <InputText.Error>{errors.name.message}</InputText.Error>}
        </InputTextField>

        <Button.Root type="submit">
          <Button.Text>Submeter</Button.Text>
        </Button.Root>

        <Button.Root type="button" onClick={prevStep}>
          <Button.Text>Voltar</Button.Text>
        </Button.Root>
      </form>
    </div>
  );
}
