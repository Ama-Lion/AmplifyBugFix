// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ImpactTerritorial, Exemplarite, Acccessibilite, CommunicationResponsable, GestionDesAchats, Alimentation, BilanCarbone, GestionNumerique, GestionArchitecturaleEtDesBatiments, GestionDeEau, GestionDesDechets, GestionEnergetique, Transports, Piloter, VieAuStade, ProduitsDentretien, GestionDesSols, RespectDesMlieux, User } = initSchema(schema);

export {
  ImpactTerritorial,
  Exemplarite,
  Acccessibilite,
  CommunicationResponsable,
  GestionDesAchats,
  Alimentation,
  BilanCarbone,
  GestionNumerique,
  GestionArchitecturaleEtDesBatiments,
  GestionDeEau,
  GestionDesDechets,
  GestionEnergetique,
  Transports,
  Piloter,
  VieAuStade,
  ProduitsDentretien,
  GestionDesSols,
  RespectDesMlieux,
  User
};