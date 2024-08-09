import { useEffect } from 'react';
import { useForm, SubmitHandler, get } from 'react-hook-form';
import { Button } from "../../components/Button/Button";
import { InputText } from "../../components/Input/InputText";
import { useCompany } from '../../hooks/useCompany';
import { useLoading } from '../../hooks/useLoading';
import { cnpjValidator } from '../../utils/cnpjValidator';
import { getCompany } from '../../utils/getCompany';

interface FinderProps {
  nextStep: () => void;
  prevStep: () => void;
}

interface FormValues {
  cnpj: string;
}

export default function Finder({ nextStep, prevStep }: FinderProps) {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormValues>({
    mode: "onSubmit",
  });
  const { isLoading, setIsLoading } = useLoading();
  const { setCompany } = useCompany();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      setIsLoading(true);
      
      const cnpjData = await getCompany(data.cnpj);

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
      
      setCompany((prevState) => ({ ...prevState, ...obj }));

      nextStep();
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isValid) {
      handleSubmit(onSubmit)();
    }
  }, [isValid]);

  return (
    <div>
      <h1>Finder</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputText.Field>
          <InputText.Label label="Nome:" htmlFor="cnpj" />
          <InputText.Root
            placeholder="Digite o CNPJ"
            mask="99.999.999/9999-99"
            register={{...register('cnpj', {
              required: "CNPJ é obrigatório",
              setValueAs: value => value.replace(/\D/g, ''),
              validate: {
                length: value => value.length === 14 || 'CNPJ deve ter exatamente 14 dígitos',
                isCnpjValid: value => cnpjValidator(value) || 'CNPJ inválido',
              },
            })}}
          />
          <InputText.Error errors={errors.cnpj} />
        </InputText.Field>

        <Button.Root type="submit" isLoadingButton={true}>
          <Button.Text>Procurar</Button.Text>
        </Button.Root>

        <Button.Root type="button" onClick={prevStep}>
          <Button.Text>Voltar</Button.Text>
        </Button.Root>
      </form>
    </div>
  );
}
