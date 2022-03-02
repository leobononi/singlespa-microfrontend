import { Pipe, PipeTransform } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';

@Pipe({ name: 'assetUrl' })
export class AssetUrlPipe implements PipeTransform {
  transform(value: string): string {
    return assetUrl(value);
  }
}