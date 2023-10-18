
function formatDate(dateString) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return new Intl.DateTimeFormat('pt-BR', options).format(new Date(dateString));
}

class ControlePontoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            records: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3333/controlepontos')
            .then(response => response.json())
            .then(data => {
                this.setState({ records: data });
            })
            .catch(error => {
                console.error("Erro ao buscar os registros:", error);
            });
    }

    render() {
        return (
            <div>
                <h2>Registros de Controle de Ponto</h2>
                <table border="1">
                    <thead>
                        <tr>
                            <th>ID Controle Ponto</th>
                            <th>ID Funcionário</th>
                            <th>Data/Hora Entrada</th>
                            <th>Data/Hora Saída</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.records.map((record) => (
                            <tr key={record.idcontroleponto}>
                                <td>{record.idcontroleponto}</td>
                                <td>{record.idfuncionario}</td>
                                <td>{formatDate(record.dthrentrada)}</td>
                                <td>{formatDate(record.dthrsaida)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

// Inicializa o componente React dentro da div "controle-ponto-root"
ReactDOM.render(<ControlePontoList />, document.getElementById('controle-ponto-root'));
