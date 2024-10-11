import { $Enums, Cliente } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';

export class Client implements Cliente {
  tipo_documento: $Enums.TipoDocumento;
  numero: number;
  bairro: string;
  complemento: string;
  estado: string;
  municipio: string;
  cep: string;
  transportadora: string;
  id_cliente: string;
  documento: string;
  razao_social: string;
  nome_fantasia: string;
  logo: string;
  email: string;
  enviar_pedidos: boolean;
  comissao: Decimal;
  endereco: string;
  inscricao_estadual: string;
  controlar_estoque: boolean;
  bloquear_venda_sem_estoque: boolean;
  transportadoras: string;
  inativo: boolean;
}
