export async function getCompany(cnpj: string) {
    const response = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`);
    
    if (!response.ok) {
      throw new Error(`Erro na resposta da API: ${response.statusText}`);
    }
    
    return response.json();
}