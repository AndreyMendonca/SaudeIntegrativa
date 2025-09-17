export const Footer = () => {
    return (
        <footer className="bg-green-700 text-white py-10">
            <div className="container mx-auto px-6 md:px-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                    {/* Contato */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Contato</h3>
                        <p className="mb-1">(18) 3021-6834</p>
                        <p>agendamento@saudeintegrativabirigui.com.br</p>
                    </div>

                    {/* Endereço */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Endereço</h3>
                        <p>Av São Francisco, 632</p>
                        <p>Jardim Pérola - Birigui - SP</p>
                    </div>

                    {/* CNPJ */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">CNPJ</h3>
                        <p>Matriz: 43.332.461/0001-74</p>
                        <p>Filial: 43.332.461/0002-55</p>
                    </div>
                </div>

                {/* Linha final */}
                <div className="border-t border-white/20 mt-8 pt-4 text-center text-sm opacity-80">
                    <p>© {new Date().getFullYear()} Saúde Integrativa Birigui. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}