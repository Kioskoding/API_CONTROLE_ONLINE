import { PartialType } from '@nestjs/swagger';
import { CreateProdutDTO } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProdutDTO) {}
