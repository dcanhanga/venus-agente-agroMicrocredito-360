import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { CooperativesPage } from './CooperativesPage'
import { FinancialInstitutionsPage } from './FinancialInstituition'
import { UsersPage } from './UserPage'
import { CooperativaUtilizadorPage } from './CooperativeMemberPage'

export function CooperativesTab() {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Cooporativos</Tab>
          <Tab>Instituições Financeiras</Tab>
          <Tab>Utilizadores</Tab>
          <Tab>Membros da Cooporativa</Tab>
        </TabList>

        <TabPanel>
          <CooperativesPage />
        </TabPanel>
        <TabPanel>
          <FinancialInstitutionsPage />
        </TabPanel>
        <TabPanel>
          <UsersPage />
        </TabPanel>
        <TabPanel>
          <CooperativaUtilizadorPage />
        </TabPanel>
      </Tabs>
    </>
  )
}
