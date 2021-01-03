const output =
`<?xml version="1.0" encoding="UTF-8"?>
<!-- edited by Thomas Wason  -->
<xsd:schema targetNamespace="http://www.imsglobal.org/xsd/imsmd_rootv1p2p1" 
            xmlns:xml="http://www.w3.org/XML/1998/namespace" 
            xmlns:xsd="http://www.w3.org/2001/XMLSchema" 
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
            xmlns="http://www.imsglobal.org/xsd/imsmd_rootv1p2p1" 
            elementFormDefault="qualified" 
            version="1.2:1.1 IMS:MD1.2">

   <xsd:import namespace="http://www.w3.org/XML/1998/namespace" schemaLocation="ims_xml.xsd"/> 

   <!-- ******************** -->
   <!-- ** Change History ** -->
   <!-- ******************** -->
   <xsd:annotation>
      <xsd:documentation>2001-04-26 T.D.Wason. IMS meta-data 1.2 XML-Schema.                                  </xsd:documentation>
      <xsd:documentation>2001-06-07 S.E.Thropp. Changed the multiplicity on all elements to match the         </xsd:documentation>
      <xsd:documentation>Final 1.2 Binding Specification.                                                     </xsd:documentation>
      <xsd:documentation>Changed all elements that use the langstringType to a multiplicy of 1 or more        </xsd:documentation>
      <xsd:documentation>Changed centity in the contribute element to have a multiplicity of 0 or more.       </xsd:documentation>
      <xsd:documentation>Changed the requirement element to have a multiplicity of 0 or more.                 </xsd:documentation>
      <xsd:documentation> 2001-07-25 Schawn Thropp.  Updates to bring the XSD up to speed with the W3C        </xsd:documentation>
      <xsd:documentation> XML Schema Recommendation.  The following changes were made: Change the             </xsd:documentation>
      <xsd:documentation> namespace to reference the 5/2/2001 W3C XML Schema Recommendation,the base          </xsd:documentation>
      <xsd:documentation> type for the durtimeType, simpleType, was changed from timeDuration to duration.    </xsd:documentation>              
      <xsd:documentation> Any attribute declarations that have use="default" had to change to use="optional"  </xsd:documentation>
      <xsd:documentation> - attr.type.  Any attribute declarations that have value ="somevalue" had to change </xsd:documentation>
      <xsd:documentation> to default = "somevalue" - attr.type (URI)                                          </xsd:documentation>
      <xsd:documentation> 2001-09-04 Schawn Thropp                                                            </xsd:documentation>
      <xsd:documentation> Changed the targetNamespace and namespace of schema to reflect version change       </xsd:documentation>
   </xsd:annotation>

   <!-- *************************** -->
   <!-- ** Attribute Declaration ** -->
   <!-- *************************** -->

   <xsd:attributeGroup name="attr.type">
      <xsd:attribute name="type" use="optional" default="URI">
         <xsd:simpleType>
            <xsd:restriction base="xsd:string">
               <xsd:enumeration value="URI"/>
               <xsd:enumeration value="TEXT"/>
            </xsd:restriction>
         </xsd:simpleType>
      </xsd:attribute>
   </xsd:attributeGroup>

   <xsd:group name="grp.any">
      <xsd:annotation>
         <xsd:documentation>Any namespaced element from any namespace may be used for an &quot;any&quot; element.  The namespace for the imported element must be defined in the instance, and the schema must be imported.  </xsd:documentation>
      </xsd:annotation>
      <xsd:sequence>
         <xsd:any namespace="##any" processContents="strict" minOccurs="0" maxOccurs="unbounded"/>
      </xsd:sequence>
   </xsd:group>

   <!-- ************************* -->
   <!-- ** Element Declaration ** -->
   <!-- ************************* -->

   <xsd:element name="aggregationlevel" type="aggregationlevelType"/>
   <xsd:element name="annotation" type="annotationType"/>
   <xsd:element name="catalogentry" type="catalogentryType"/>
   <xsd:element name="catalog" type="catalogType"/>
   <xsd:element name="centity" type="centityType"/>
   <xsd:element name="classification" type="classificationType"/>
   <xsd:element name="context" type="contextType"/>
   <xsd:element name="contribute" type="contributeType"/>
   <xsd:element name="copyrightandotherrestrictions" type="copyrightandotherrestrictionsType"/>
   <xsd:element name="cost" type="costType"/>
   <xsd:element name="coverage" type="coverageType"/>
   <xsd:element name="date" type="dateType"/>
   <xsd:element name="datetime" type="datetimeType"/>
   <xsd:element name="description" type="descriptionType"/>
   <xsd:element name="difficulty" type="difficultyType"/>
   <xsd:element name="educational" type="educationalType"/>
   <xsd:element name="entry" type="entryType"/>
   <xsd:element name="format" type="formatType"/>
   <xsd:element name="general" type="generalType"/>
   <xsd:element name="identifier" type="xsd:string"/>
   <xsd:element name="intendedenduserrole" type="intendedenduserroleType"/>
   <xsd:element name="interactivitylevel" type="interactivitylevelType"/>
   <xsd:element name="interactivitytype" type="interactivitytypeType"/>
   <xsd:element name="keyword" type="keywordType"/>
   <xsd:element name="kind" type="kindType"/>
   <xsd:element name="langstring" type="langstringType"/>
   <xsd:element name="language" type="xsd:string"/>
   <xsd:element name="learningresourcetype" type="learningresourcetypeType"/>
   <xsd:element name="lifecycle" type="lifecycleType"/>
   <xsd:element name="location" type="locationType"/>
   <xsd:element name="lom" type="lomType"/>
   <xsd:element name="maximumversion" type="minimumversionType"/>
   <xsd:element name="metadatascheme" type="metadataschemeType"/>
   <xsd:element name="metametadata" type="metametadataType"/>
   <xsd:element name="minimumversion" type="maximumversionType"/>
   <xsd:element name="name" type="nameType"/>
   <xsd:element name="purpose" type="purposeType"/>
   <xsd:element name="relation" type="relationType"/>
   <xsd:element name="requirement" type="requirementType"/>
   <xsd:element name="resource" type="resourceType"/>
   <xsd:element name="rights" type="rightsType"/>
   <xsd:element name="role" type="roleType"/>
   <xsd:element name="semanticdensity" type="semanticdensityType"/>
   <xsd:element name="size" type="sizeType"/>
   <xsd:element name="source" type="sourceType"/>
   <xsd:element name="status" type="statusType"/>
   <xsd:element name="structure" type="structureType"/>
   <xsd:element name="taxon" type="taxonType"/>
   <xsd:element name="taxonpath" type="taxonpathType"/>
   <xsd:element name="technical" type="technicalType"/>
   <xsd:element name="title" type="titleType"/>
   <xsd:element name="type" type="typeType"/>
   <xsd:element name="typicalagerange" type="typicalagerangeType"/>
   <xsd:element name="typicallearningtime" type="typicallearningtimeType"/>
   <xsd:element name="value" type="valueType"/>
   <xsd:element name="person" type="personType"/>
   <xsd:element name="vcard" type="xsd:string"/>
   <xsd:element name="version" type="versionType"/>
   <xsd:element name="installationremarks" type="installationremarksType"/>
   <xsd:element name="otherplatformrequirements" type="otherplatformrequirementsType"/>
   <xsd:element name="duration" type="durationType"/>
   <xsd:element name="id" type="idType"/>

   <!-- ******************* -->
   <!-- ** Complex Types ** -->
   <!-- ******************* -->

   <xsd:complexType name="aggregationlevelType">
      <xsd:sequence>
         <xsd:element ref="source"/>
         <xsd:element ref="value"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="annotationType" mixed="true">
      <xsd:sequence>
         <xsd:element ref="person" minOccurs="0"/>
         <xsd:element ref="date" minOccurs="0"/>
         <xsd:element ref="description" minOccurs="0"/>
         <xsd:group ref="grp.any"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="catalogentryType" mixed="true">
      <xsd:sequence>
         <xsd:element ref="catalog"/>
         <xsd:element ref="entry"/>
         <xsd:group ref="grp.any"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="centityType">
      <xsd:sequence>
         <xsd:element ref="vcard"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="classificationType" mixed="true">
      <xsd:sequence>
         <xsd:element ref="purpose" minOccurs="0"/>
         <xsd:element ref="taxonpath" minOccurs="0" maxOccurs="unbounded"/>
         <xsd:element ref="description" minOccurs="0"/>
         <xsd:element ref="keyword" minOccurs="0" maxOccurs="unbounded"/>
         <xsd:group ref="grp.any"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="contextType">
      <xsd:sequence>
         <xsd:element ref="source"/>
         <xsd:element ref="value"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="contributeType" mixed="true">
      <xsd:sequence>
         <xsd:element ref="role"/>
         <xsd:element ref="centity" minOccurs="0" maxOccurs="unbounded"/>
         <xsd:element ref="date" minOccurs="0"/>
         <xsd:group ref="grp.any"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="copyrightandotherrestrictionsType">
      <xsd:sequence>
         <xsd:element ref="source"/>
         <xsd:element ref="value"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="costType">
      <xsd:sequence>
         <xsd:element ref="source"/>
         <xsd:element ref="value"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="coverageType">
      <xsd:sequence>
         <xsd:element ref="langstring" minOccurs="1" maxOccurs="unbounded"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="dateType">
      <xsd:sequence>
         <xsd:element ref="datetime" minOccurs="0"/>
         <xsd:element ref="description" minOccurs="0"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="descriptionType">
      <xsd:sequence>
         <xsd:element ref="langstring" minOccurs="1" maxOccurs="unbounded"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="difficultyType">
      <xsd:sequence>
         <xsd:element ref="source"/>
         <xsd:element ref="value"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="durationType">
      <xsd:sequence>
         <xsd:element ref="datetime" minOccurs="0"/>
         <xsd:element ref="description" minOccurs="0"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="educationalType" mixed="true">
      <xsd:sequence>
         <xsd:element ref="interactivitytype" minOccurs="0"/>
         <xsd:element ref="learningresourcetype" minOccurs="0" maxOccurs="unbounded"/>
         <xsd:element ref="interactivitylevel" minOccurs="0"/>
         <xsd:element ref="semanticdensity" minOccurs="0"/>
         <xsd:element ref="intendedenduserrole" minOccurs="0" maxOccurs="unbounded"/>
         <xsd:element ref="context" minOccurs="0" maxOccurs="unbounded"/>
         <xsd:element ref="typicalagerange" minOccurs="0" maxOccurs="unbounded"/>
         <xsd:element ref="difficulty" minOccurs="0"/>
         <xsd:element ref="typicallearningtime" minOccurs="0"/>
         <xsd:element ref="description" minOccurs="0"/>
         <xsd:element ref="language" minOccurs="0" maxOccurs="unbounded"/>
         <xsd:group ref="grp.any"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="entryType">
      <xsd:sequence>
         <xsd:element ref="langstring" minOccurs="1" maxOccurs="unbounded"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="generalType" mixed="true">
      <xsd:sequence>
         <xsd:element ref="identifier" minOccurs="0"/>
         <xsd:element ref="title" minOccurs="0"/>
         <xsd:element ref="catalogentry" minOccurs="0" maxOccurs="unbounded"/>
         <xsd:element ref="language" minOccurs="0" maxOccurs="unbounded"/>
         <xsd:element ref="description" minOccurs="0" maxOccurs="unbounded"/>
         <xsd:element ref="keyword" minOccurs="0" maxOccurs="unbounded"/>
         <xsd:element ref="coverage" minOccurs="0" maxOccurs="unbounded"/>
         <xsd:element ref="structure" minOccurs="0"/>
         <xsd:element ref="aggregationlevel" minOccurs="0"/>
         <xsd:group ref="grp.any"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="installationremarksType">
      <xsd:sequence>
         <xsd:element ref="langstring" minOccurs="1" maxOccurs="unbounded"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="intendedenduserroleType">
      <xsd:sequence>
         <xsd:element ref="source"/>
         <xsd:element ref="value"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="interactivitylevelType">
      <xsd:sequence>
         <xsd:element ref="source"/>
         <xsd:element ref="value"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="interactivitytypeType">
      <xsd:sequence>
         <xsd:element ref="source"/>
         <xsd:element ref="value"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="keywordType">
      <xsd:sequence>
         <xsd:element ref="langstring" minOccurs="1" maxOccurs="unbounded"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="kindType">
      <xsd:sequence>
         <xsd:element ref="source"/>
         <xsd:element ref="value"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="langstringType">
      <xsd:simpleContent>
         <xsd:extension base="xsd:string">
            <xsd:attribute ref="xml:lang"/>
         </xsd:extension>
      </xsd:simpleContent>
   </xsd:complexType>
   
   <xsd:complexType name="learningresourcetypeType">
      <xsd:sequence>
         <xsd:element ref="source"/>
         <xsd:element ref="value"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="lifecycleType" mixed="true">
      <xsd:sequence>
         <xsd:element ref="version" minOccurs="0"/>
         <xsd:element ref="status" minOccurs="0"/>
         <xsd:element ref="contribute" minOccurs="0" maxOccurs="unbounded"/>
         <xsd:group ref="grp.any"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="locationType">
      <xsd:simpleContent>
         <xsd:extension base="xsd:string">
            <xsd:attributeGroup ref="attr.type"/>
         </xsd:extension>
      </xsd:simpleContent>
   </xsd:complexType>
   
   <xsd:complexType name="lomType">
      <xsd:sequence>
         <xsd:element ref="general" minOccurs="0"/>
         <xsd:element ref="lifecycle" minOccurs="0"/>
         <xsd:element ref="metametadata" minOccurs="0"/>
         <xsd:element ref="technical" minOccurs="0"/>
         <xsd:element ref="educational" minOccurs="0"/>
         <xsd:element ref="rights" minOccurs="0"/>
         <xsd:element ref="relation" minOccurs="0" maxOccurs="unbounded"/>
         <xsd:element ref="annotation" minOccurs="0" maxOccurs="unbounded"/>
         <xsd:element ref="classification" minOccurs="0" maxOccurs="unbounded"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="metametadataType" mixed="true">
      <xsd:sequence>
         <xsd:element ref="identifier" minOccurs="0"/>
         <xsd:element ref="catalogentry" minOccurs="0" maxOccurs="unbounded"/>
         <xsd:element ref="contribute" minOccurs="0" maxOccurs="unbounded"/>
         <xsd:element ref="metadatascheme" minOccurs="0" maxOccurs="unbounded"/>
         <xsd:element ref="language" minOccurs="0"/>
         <xsd:group ref="grp.any"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="nameType">
      <xsd:sequence>
         <xsd:element ref="source"/>
         <xsd:element ref="value"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="otherplatformrequirementsType">
      <xsd:sequence>
         <xsd:element ref="langstring" minOccurs="1" maxOccurs="unbounded"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="personType">
      <xsd:sequence>
         <xsd:element ref="vcard"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="purposeType">
      <xsd:sequence>
         <xsd:element ref="source"/>
         <xsd:element ref="value"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="relationType" mixed="true">
      <xsd:sequence>
         <xsd:element ref="kind" minOccurs="0"/>
         <xsd:element ref="resource" minOccurs="0"/>
         <xsd:group ref="grp.any"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="requirementType" mixed="true">
      <xsd:sequence>
         <xsd:element ref="type" minOccurs="0"/>
         <xsd:element ref="name" minOccurs="0"/>
         <xsd:element ref="minimumversion" minOccurs="0"/>
         <xsd:element ref="maximumversion" minOccurs="0"/>
         <xsd:group ref="grp.any"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="resourceType" mixed="true">
      <xsd:sequence>
         <xsd:element ref="identifier" minOccurs="0"/>
         <xsd:element ref="description" minOccurs="0"/>
         <xsd:element ref="catalogentry" minOccurs="0" maxOccurs="unbounded"/>
         <xsd:group ref="grp.any"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="rightsType" mixed="true">
      <xsd:sequence>
         <xsd:element ref="cost" minOccurs="0"/>
         <xsd:element ref="copyrightandotherrestrictions" minOccurs="0"/>
         <xsd:element ref="description" minOccurs="0"/>
         <xsd:group ref="grp.any"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="roleType">
      <xsd:sequence>
         <xsd:element ref="source"/>
         <xsd:element ref="value"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="semanticdensityType">
      <xsd:sequence>
         <xsd:element ref="source"/>
         <xsd:element ref="value"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="sourceType">
      <xsd:sequence>
         <xsd:element ref="langstring"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="statusType">
      <xsd:sequence>
         <xsd:element ref="source"/>
         <xsd:element ref="value"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="stringType">
      <xsd:simpleContent>
         <xsd:extension base="xsd:string">
            <xsd:attribute ref="xml:lang"/>
         </xsd:extension>
      </xsd:simpleContent>
   </xsd:complexType>
   
   <xsd:complexType name="structureType">
      <xsd:sequence>
         <xsd:element ref="source"/>
         <xsd:element ref="value"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="taxonpathType">
      <xsd:sequence>
         <xsd:element ref="source" minOccurs="0"/>
         <xsd:element ref="taxon" minOccurs="0" maxOccurs="1"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="taxonType">
      <xsd:sequence>
         <xsd:element ref="id" minOccurs="0"/>
         <xsd:element ref="entry" minOccurs="0"/>
         <xsd:element ref="taxon" minOccurs="0" maxOccurs="1"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="technicalType" mixed="true">
      <xsd:sequence>
         <xsd:element ref="format" minOccurs="0" maxOccurs="unbounded"/>
         <xsd:element ref="size" minOccurs="0"/>
         <xsd:element ref="location" minOccurs="0" maxOccurs="unbounded"/>
         <xsd:element ref="requirement" minOccurs="0" maxOccurs="unbounded"/>
         <xsd:element ref="installationremarks" minOccurs="0"/>
         <xsd:element ref="otherplatformrequirements" minOccurs="0"/>
         <xsd:element ref="duration" minOccurs="0"/>
         <xsd:group ref="grp.any"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="titleType">
      <xsd:sequence>
         <xsd:element ref="langstring" minOccurs="1" maxOccurs="unbounded"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="typeType">
      <xsd:sequence>
         <xsd:element ref="source"/>
         <xsd:element ref="value"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="typicalagerangeType">
      <xsd:sequence>
         <xsd:element ref="langstring" minOccurs="1" maxOccurs="unbounded"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="typicallearningtimeType">
      <xsd:sequence>
         <xsd:element ref="datetime" minOccurs="0"/>
         <xsd:element ref="description" minOccurs="0"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="valueType">
      <xsd:sequence>
         <xsd:element ref="langstring"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <xsd:complexType name="versionType">
      <xsd:sequence>
         <xsd:element ref="langstring" minOccurs="1" maxOccurs="unbounded"/>
      </xsd:sequence>
   </xsd:complexType>
   
   <!-- ****************** -->
   <!-- ** Simple Types ** -->
   <!-- ****************** -->
   
   <xsd:simpleType name="formatType">
      <xsd:restriction base="xsd:string"/>
   </xsd:simpleType>
   
   <xsd:simpleType name="sizeType">
      <xsd:restriction base="xsd:int"/>
   </xsd:simpleType>
   
   <xsd:simpleType name="datetimeType">
      <xsd:restriction base="xsd:string"/>
   </xsd:simpleType>
   
   <xsd:simpleType name="idType">
      <xsd:restriction base="xsd:string"/>
   </xsd:simpleType>
   
   <xsd:simpleType name="metadataschemeType">
      <xsd:restriction base="xsd:string"/>
   </xsd:simpleType>
   
   <xsd:simpleType name="catalogType">
      <xsd:restriction base="xsd:string"/>
   </xsd:simpleType>
   
   <xsd:simpleType name="minimumversionType">
      <xsd:restriction base="xsd:string"/>
   </xsd:simpleType>
   
   <xsd:simpleType name="maximumversionType">
      <xsd:restriction base="xsd:string"/>
   </xsd:simpleType>

</xsd:schema>
`

export default output