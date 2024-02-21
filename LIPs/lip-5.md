---
title: Adding access control and abstraction
description: Allow user to selectively share information associated to their lens handles 
author: Bhavya Batra (@bhavyabatra19) 
status: Draft
type: Lens Metadata Standard, Lens Open Algorithm Standard
created: 2024-02-21
---

## Abstract

The proposed enhancement aims to integrate Zero-Knowledge Proofs (ZKPs) into Lens Protocol, enabling users to exercise granular access control over the sharing of information related to their handles. By implementing ZKPs, Lens Protocol will empower users to selectively disclose metadata associated with their handles while preserving privacy and confidentiality.
This could be useful when an app needs to verify if someone has a minimum number of connections without disclosing the exact number. There can be many more use cases for this : verifying eligibilty without disclosing age, verifying ownership of posts in a certain category (for airdrops) , verifying participation ( to gaurantee activity) etc

## Motivation

I want Lens social graph to be a widely accepted standard for proof of participation

## Specification

1. ZKP Generation
   - Users will have the ability to generate Zero-Knowledge Proofs (ZKPs) for specific metadata associated with their Lens handles. ( connections , publications , Profile)
   - ZKPs will be generated  to prove the validity of the metadata without revealing the actual content to third parties. ( no. of connections , publication type , id name & appid)

2. Selective Disclosure:
   - Users can selectively disclose metadata associated with their handles by providing ZKPs to authorized parties.
   - ZKPs will allow users to prove the validity of their metadata assertions without disclosing sensitive information such as the actual number of connections or other profile attributes.

3. Integration with Lens Handles:
   - ZKPs will be seamlessly integrated into Lens handles, allowing users to manage access control settings directly from their profiles.
   - UI will provide intuitive controls for generating and sharing ZKPs, enhancing user experience and accessibility.

### Workflow

1. ZKP Generation:
   - Users initiate the ZKP generation process from their Lens handles, selecting the metadata attributes they wish to prove.
   - Generating ZKPs for the selected metadata using cryptographic algorithms and user-specific parameters.

2. Selective Disclosure:
   - Users can share the generated ZKPs with authorized parties to prove the validity of their metadata assertions.
   - Authorized parties can verify the ZKPs using the verification mechanism without gaining access to the actual metadata.

3. Revocation and Expiry:
   - Users have the option to revoke or expire ZKPs at any time to invalidate previously shared proofs.
   - UI and mechanisms for users to manage the revocation and expiry of ZKPs from their handles.
   - Users can revoke access to profiles when they want to leave an application but not delete their accounts.

### Security Considerations

1. Cryptographic Security:
   - Implementing industry-standard cryptographic algorithms and protocols for generating and verifying ZKPs.
   - Robust key management practices will be employed to safeguard user data and prevent unauthorized access to ZKPs.

2. Privacy Preservation:
   - ZKPs will be designed to preserve user privacy by ensuring that only necessary metadata attributes are disclosed to authorized parties.
   - Need to enforce strict data minimization principles to limit the exposure of user information during ZKP generation and verification.

3. Authorization Mechanisms:
   - To implement robust authorization mechanisms to ensure that only authorized parties can access and verify ZKPs shared by users.
   - Access control policies will be enforced to prevent unauthorized access to sensitive metadata associated with Lens handles.

### Backwards Compatibility

The integration of Zero-Knowledge Proofs (ZKPs) into Lens handles will be implemented in a backward-compatible manner to ensure continuity for existing users. Compatibility with legacy metadata sharing mechanisms will be maintained during the transition to ZKP-based access control.

### Copyright

Copyright and related rights waived via CC0.
