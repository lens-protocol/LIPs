# Lens ML open standards

The rapid growth and development of lens ML systems have underscored the importance of establishing open standards that promote consistency, interoperability, and collaboration. By setting open standards for naming conventions, entities, service requirements, metadata, and data output, as outlined above, we can streamline the process of integrating various lens ML models and services into a cohesive ecosystem. This uniformity will enable developers and researchers to work more effectively together, reducing the time and effort spent on understanding and adapting to different proprietary systems. Furthermore, these open standards facilitate the sharing of knowledge and expertise, fostering innovation and encouraging the development of best practices in the lens ML community. By adopting and adhering to these open standards, we can accelerate progress in lens ML and unlock its full potential to benefit various industries and applications across the globe.

## Specification

### Naming conventions

When defining a new machine learning (ML) standard, adhere to the following naming conventions:

```bash
{entity}_{personal/global}_{model_output_type}
```

Examples:

- profile_personal_score
- profile_global_score

#### Entity

An entity is the main object that we are trying to describe. The ML open standards within [entities](./entities) have all the current entities which are supported by the Lens ML open standards. Anyone can do a PR proposal to add a new entity. It must follow the template of the [entity template](./entities/template.entity.md).

#### Personal and Global

The personal/global flag differentiates between machine learning results that are specific to an individual user and those that apply to all users collectively. For instance, a user's following scores represent personal data, while aggregated scores of all users constitute global information.

#### Model Output Type

The modal output type refers to the primary output of a specific model. For instance, in the case of a profile scoring model, the output type would be a score. This output type is defined within the model standard's criteria and serves as a guideline for anyone developing or implementing this particular model.

### Model Data Output

Each approved ML open standard model must have a clearly defined service data output, specifying the data returned by the service. This standardization is crucial for ensuring ease of use and consistent output interfaces across implementations. The advantage of this approach is that it does not impose constraints on the programming language, the model's construction, the data it utilizes, or the computation methods employed. Instead, it focuses solely on ensuring that the output conforms to the correct structure.

Additionally, the data output should utilize a tuple-style format when possible to minimize wasted space caused by repeated object names. It is also required that you write the spec using json schema to make it easy for all to read.

### Model service requirements and constraints

Each model within the standards must adhere to a set of predefined requirements or rules. These rules, such as "updates are allowed only every 3 hours," establish constraints that the model should follow. Indexer services can also enforce these constraints to ensure optimal performance. For example, by defining the service requirements, you can prevent excessive requests that could potentially overload the system, such as requests made every second.

### Model Service Metadata

The service metadata should be based on model card and include the following information:

- Service ID: unique identifier in the format {entity}_{personal/global}_{developer}_{model_name}_{version_number} (e.g., profile_global_lens_ranking_2)
- Model description: a description of what the model does (required)
- Model developer: the developer of the model (required)
- Intended uses:
  - How the model should be used
  - What the model was designed to do
- Model date: the date the model was created (required)
- Model versions:
  - The model can have multiple versions
  - If the intended uses change for a version, it must be a new service
- Model interval: how often the model updates
- Limitations: optional, but recommended
- Performance: optional, but recommended
- External website: optional
- GitHub repository with the code: optional
- Licenses: optional
- Global model data output location: not required if you got the personal model data output location
- Personal model data output location: not required if you got the global model data output location

#### Model Data Output Saving Results

Currently, the standards support only JSON or JSON Lines as data output formats. We will not be supporting API endpoint calls at this time, due to concerns related to TCP connections, downtime, and data retrieval speed. Additionally, we do not want to require participants to host their APIs to comply with the standard. The location for saving this data is specified within the service metadata.

The model itself sets the maximum constraints for array sizes and file sizes for data output. This ensures that the output data remains manageable and can be easily consumed by APIs/Apps.
