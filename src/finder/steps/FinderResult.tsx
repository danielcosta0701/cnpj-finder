import { useCompany } from "../../hooks/useCompany";
import { useForm, SubmitHandler } from 'react-hook-form';
import { InputText } from "../../components/Input/InputText";
import { Button } from "../../components/Button/Button";

interface FinderResultProps {
    nextStep: () => void;
    prevStep: () => void;
}

interface FormValues {
    companyName: string;
    legalName: string;
    openingDate: string;
    status: string;
    mainActivity: string;
    address: {
        street: string;
        number: string;
        complement: string;
        neighborhood: string;
        city: string;
        state: string;
        postalCode: string;
    };
    phone: string;
    email: string;
    partners: {
        name: string;
        qualification: string;
        entryDate: string;
    }[];
}

export default function FinderResult({ prevStep }: FinderResultProps) {
    const { company, setCompany } = useCompany();

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            companyName: company?.companyName || "",
            legalName: company?.legalName || "",
            openingDate: company?.openingDate || "",
            status: company?.status || "",
            mainActivity: company?.mainActivity || "",
            address: {
                street: company?.address?.street || "",
                number: company?.address?.number || "",
                complement: company?.address?.complement || "",
                neighborhood: company?.address?.neighborhood || "",
                city: company?.address?.city || "",
                state: company?.address?.state || "",
                postalCode: company?.address?.postalCode || ""
            },
            phone: company?.phone || "",
            email: company?.email || "",
            partners: company?.partners || []
        }
    });

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        setCompany(prevCompany => ({...prevCompany, ...data}));
    };

    return (
        <div>
            <section className="min-h-screen">
                <h1>Company Details</h1>
                {company && (
                    <>
                        <h2>{company.companyName}</h2>
                        <p><strong>Legal Name:</strong> {company.legalName}</p>
                        <p><strong>Opening Date:</strong> {company.openingDate}</p>
                        <p><strong>Status:</strong> {company.status}</p>
                        <p><strong>Main Activity:</strong> {company.mainActivity}</p>

                        <h2>Address</h2>
                        <p><strong>Street:</strong> {company.address.street}</p>
                        <p><strong>Number:</strong> {company.address.number}</p>
                        <p><strong>Complement:</strong> {company.address.complement}</p>
                        <p><strong>Neighborhood:</strong> {company.address.neighborhood}</p>
                        <p><strong>City:</strong> {company.address.city}</p>
                        <p><strong>State:</strong> {company.address.state}</p>
                        <p><strong>Postal Code:</strong> {company.address.postalCode}</p>

                        <p><strong>Phone:</strong> {company.phone}</p>
                        <p><strong>Email:</strong> {company.email}</p>

                        <h2>Partners</h2>
                        {company.partners.length > 0 ? (
                            <ul>
                                {company.partners.map((partner, index) => (
                                    <li key={index}>
                                        <p><strong>Name:</strong> {partner.name}</p>
                                        <p><strong>Qualification:</strong> {partner.qualification}</p>
                                        <p><strong>Entry Date:</strong> {partner.entryDate}</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No partners available.</p>
                        )}
                    </>
                )}
            </section>

            <section className="min-h-screen">
                <h1>Edit Company Details</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputText.Field>
                        <InputText.Label label="Company Name:" htmlFor="companyName" />
                        <InputText.Root
                            placeholder="Company Name"
                            register={{...register('companyName')}}
                        />
                        {errors.companyName && <InputText.Error>{errors.companyName.message}</InputText.Error>}
                    </InputText.Field>

                    <InputText.Field>
                        <InputText.Label label="Legal Name:" htmlFor="legalName" />
                        <InputText.Root
                            placeholder="Legal Name"
                            register={{...register('legalName')}}
                        />
                        {errors.legalName && <InputText.Error>{errors.legalName.message}</InputText.Error>}
                    </InputText.Field>

                    <InputText.Field>
                        <InputText.Label label="Opening Date:" htmlFor="openingDate" />
                        <InputText.Root
                            placeholder="Opening Date"
                            register={{...register('openingDate')}}
                        />
                        {errors.openingDate && <InputText.Error>{errors.openingDate.message}</InputText.Error>}
                    </InputText.Field>

                    <InputText.Field>
                        <InputText.Label label="Status:" htmlFor="status" />
                        <InputText.Root
                            placeholder="Status"
                            register={{...register('status')}}
                        />
                        {errors.status && <InputText.Error>{errors.status.message}</InputText.Error>}
                    </InputText.Field>

                    <InputText.Field>
                        <InputText.Label label="Main Activity:" htmlFor="mainActivity" />
                        <InputText.Root
                            placeholder="Main Activity"
                            register={{...register('mainActivity')}}
                        />
                        {errors.mainActivity && <InputText.Error>{errors.mainActivity.message}</InputText.Error>}
                    </InputText.Field>

                    <InputText.Field>
                        <InputText.Label label="Street:" htmlFor="address.street" />
                        <InputText.Root
                            placeholder="Street"
                            register={{...register('address.street')}}
                        />
                    </InputText.Field>

                    <InputText.Field>
                        <InputText.Label label="Number:" htmlFor="address.number" />
                        <InputText.Root
                            placeholder="Number"
                            register={{...register('address.number')}}
                        />
                    </InputText.Field>

                    <InputText.Field>
                        <InputText.Label label="Complement:" htmlFor="address.complement" />
                        <InputText.Root
                            placeholder="Complement"
                            register={{...register('address.complement')}}
                        />
                    </InputText.Field>

                    <InputText.Field>
                        <InputText.Label label="Neighborhood:" htmlFor="address.neighborhood" />
                        <InputText.Root
                            placeholder="Neighborhood"
                            register={{...register('address.neighborhood')}}
                        />
                    </InputText.Field>

                    <InputText.Field>
                        <InputText.Label label="City:" htmlFor="address.city" />
                        <InputText.Root
                            placeholder="City"
                            register={{...register('address.city')}}
                        />
                    </InputText.Field>

                    <InputText.Field>
                        <InputText.Label label="State:" htmlFor="address.state" />
                        <InputText.Root
                            placeholder="State"
                            register={{...register('address.state')}}
                        />
                    </InputText.Field>

                    <InputText.Field>
                        <InputText.Label label="Postal Code:" htmlFor="address.postalCode" />
                        <InputText.Root
                            placeholder="Postal Code"
                            register={{...register('address.postalCode')}}
                        />
                    </InputText.Field>

                    <InputText.Field>
                        <InputText.Label label="Phone:" htmlFor="phone" />
                        <InputText.Root
                            placeholder="Phone"
                            register={{...register('phone')}}
                        />
                    </InputText.Field>

                    <InputText.Field>
                        <InputText.Label label="Email:" htmlFor="email" />
                        <InputText.Root
                            placeholder="Email"
                            register={{...register('email')}}
                        />
                    </InputText.Field>

                    <Button.Root type="submit">
                        <Button.Text>Submit</Button.Text>
                    </Button.Root>

                    <Button.Root type="button" onClick={prevStep}>
                        <Button.Text>Back</Button.Text>
                    </Button.Root>
                </form>
            </section>
        </div>
    );
}